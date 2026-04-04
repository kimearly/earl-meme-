$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:3000/")
$listener.Start()
Write-Host "Server started at http://localhost:3000/"

$root = "C:\Users\zza\.gemini\antigravity\scratch\blog"
$dataFile = Join-Path $root "danmaku.json"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
    ".webp" = "image/webp"
    ".json" = "application/json; charset=utf-8"
}

if (-not (Test-Path $dataFile)) {
    "[]" | Out-File $dataFile -Encoding utf8
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $path = $request.Url.LocalPath

        # Handle API requests
        if ($path -eq "/api/danmaku") {
            if ($request.HttpMethod -eq "GET") {
                $content = [System.IO.File]::ReadAllText($dataFile)
                $response.ContentType = "application/json; charset=utf-8"
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            } elseif ($request.HttpMethod -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $body = $reader.ReadToEnd()
                
                $newComment = $body | ConvertFrom-Json
                $timeSpan = New-TimeSpan -Start (Get-Date "01/01/1970") -End (Get-Date)
                $timeMs = [math]::Round($timeSpan.TotalMilliseconds)
                $newComment | Add-Member -MemberType NoteProperty -Name "time" -Value $timeMs

                $contentRaw = Get-Content $dataFile -Raw -Encoding utf8
                $comments = $contentRaw | ConvertFrom-Json
                if ($null -eq $comments) { $comments = @() }
                $comments += $newComment
                
                # Format JSON manually or use ConvertTo-Json
                # Be careful with depth in ConvertTo-Json
                $jsonStr = $comments | ConvertTo-Json -Depth 5 -Compress
                [System.IO.File]::WriteAllText($dataFile, $jsonStr, [System.Text.Encoding]::UTF8)
                
                $response.StatusCode = 200
                $msg = [System.Text.Encoding]::UTF8.GetBytes('{"status":"ok"}')
                $response.OutputStream.Write($msg, 0, $msg.Length)
            }
            $response.Close()
            continue
        }

        # Handle static files
        if ($path -eq "/") { $path = "/index.html" }
        $filePath = Join-Path $root ($path -replace "/", "\")

        if (Test-Path $filePath) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $contentType
            $buffer = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }

        $response.Close()
    } catch {
        Write-Host "Error processing request"
    }
}
