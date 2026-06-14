$ErrorActionPreference = "SilentlyContinue"

Write-Output "Searching for Maven (mvn.cmd)..."
$mvnPath = (Get-ChildItem -Path 'C:\' -Filter 'mvn.cmd' -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1).FullName

if ($mvnPath) {
    Write-Output "Found Maven at: $mvnPath"
    & $mvnPath org.springframework.boot:spring-boot-maven-plugin:3.1.5:run
} else {
    Write-Output "Maven not found on C:\ drive."
}
