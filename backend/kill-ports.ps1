$ports = @(8080, 8081)
foreach ($port in $ports) {
    $connections = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
    if ($connections) {
        foreach ($conn in $connections) {
            Write-Output "Killing process $($conn.OwningProcess) listening on port $port"
            Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
        }
    }
}
Write-Output "Ports cleared."
