@echo off
REM filepath: c:\SoftwareDistribution\fpacdev\workspaces\FPAC-design-system\fpac-design-system\update-repos\pushAll.bat
REM Helper: push all branches to 'origin'.
REM Usage: pushAll.bat [--yes] [--dry-run] [--help]
REM Without --yes the script will only show the command it would run.

REM Ensure we're inside a git repository
git rev-parse --is-inside-work-tree >nul 2>&1
IF ERRORLEVEL 1 (
    echo This directory is not a git repository. Please run this inside a repository.
    exit /b 1
)

set action=preview
IF /I "%1"=="--yes" (
    set action=push
) ELSE IF /I "%1"=="--dry-run" (
    set action=dryrun
) ELSE IF /I "%1"=="--help" (
    echo Usage: pushAll.bat [--yes] [--dry-run] [--help]
    echo.
    echo   --yes      Actually run: git push origin --all
    echo   --dry-run  List the local branches that would be pushed (no network operations)
    echo   --help     Show this message
    exit /b 0
)

if "%action%"=="dryrun" (
    echo Dry run: listing local branches that would be pushed to origin:
    for /F "delims=" %%B in ('git for-each-ref --format="%%(refname:short)" refs/heads') do (
        echo    git push origin %%B
    )
    echo.
    echo To actually push all branches run: pushAll.bat --yes
    exit /b 0
)

if "%action%"=="preview" (
    echo This will run: git push origin --all
    echo To actually run it, re-run with: pushAll.bat --yes
    echo For a dry-run listing branches: pushAll.bat --dry-run
    exit /b 0
)

if "%action%"=="push" (
    echo Pushing all branches to origin...
    git push origin --all
)