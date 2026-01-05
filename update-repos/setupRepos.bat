@echo off

REM Usage: setupRepos.bat [debug]
REM Ensure script is executed inside a git repository
git rev-parse --is-inside-work-tree >nul 2>&1
IF ERRORLEVEL 1 (
    echo This directory is not a git repository. Please run this inside a repository.
    exit /b 1
)

set shouldDebug=0
IF /I "%1"=="debug" (
    set shouldDebug=1
)

SETLOCAL ENABLEDELAYEDEXPANSION
for /F %%a in ('echo prompt $E ^| cmd') do (
  set "ESC=%%a"
)

set githubUrl=https://github.com/USDA-FPAC/fpac-design-system.git
set bitbucketUrl=https://bitbucket.fpac.usda.gov/scm/fpacux/fpac-design-system.git

set hasGithub=0
set hasBitbucket=0

FOR /F "delims= eol=" %%a in ('git remote -v') do (
    if !shouldDebug! equ 1 (
        echo %ESC%[34mFound a remote configuration: %%a %ESC%[0m
    )

    FOR /F "tokens=1-3 " %%b in ("%%a") do (
        set remoteName=%%b
        set remoteUrl=%%c
        set remoteType=%%d

        if "!remoteType!" equ "(push)" (
            if !shouldDebug! equ 1 (
                echo    Looking for Bitbucket or Github URLs for !remoteName!
            )

            echo !remoteUrl! | findstr /i !githubUrl! >nul
            if !errorlevel! equ 0 (
                @REM GH url already configured
                set hasGithub=1
            )
            echo !remoteUrl! | findstr /i !bitbucketUrl! >nul
            if !errorlevel! equ 0 (
                @REM BB url already configured
                set hasBitbucket=1
            )
        ) else (
            if !shouldDebug! equ 1 (
                echo    Skipping remote type of: !remoteType!
            )
        )

        if !shouldDebug! equ 1 (
            echo.
        )
    )
)


if !hasBitbucket! equ 0 (
    @REM Missing Bitbucket remote, so add it now as 'origin'
    echo %ESC%[33mAdding missing Bitbucket remote... !bitbucketUrl!%ESC%[0m
    git remote add origin "!bitbucketUrl!"
)

if !hasGithub! equ 0 (
    @REM Missing Github remote, so add it now as 'ghOrigin'
    echo %ESC%[33mAdding missing Github remote... !githubUrl!%ESC%[0m
    @REM git remote add ghOrigin "!githubUrl!"
    git remote set-url --add origin "!githubUrl!"
)

echo.
echo %ESC%[32mThis repository is configured for:%ESC%[0m
git remote -v