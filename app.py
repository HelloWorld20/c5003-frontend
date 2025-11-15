#!/usr/bin/env python3
"""
Frontend Development Server Launcher
This script helps you run the Vue.js frontend development server using Python.
It will check for Node.js/pnpm, install dependencies if needed, and start the dev server.
"""

import subprocess
import sys
import shutil
from pathlib import Path

# Configuration
PROJECT_DIR = Path(__file__).resolve().parent
NODE_MODULES_DIR = PROJECT_DIR / "node_modules"
PNPM_LOCK_FILE = PROJECT_DIR / "pnpm-lock.yaml"

def check_command_exists(command):
    """Check if a command exists in the system PATH."""
    return shutil.which(command) is not None

def check_node_installed():
    """Check if Node.js is installed."""
    if not check_command_exists("node"):
        print("❌ Node.js is not installed!")
        print("Please install Node.js from https://nodejs.org/")
        return False
    
    try:
        result = subprocess.run(
            ["node", "--version"],
            capture_output=True,
            text=True,
            check=True
        )
        print(f"✅ Node.js version: {result.stdout.strip()}")
        return True
    except subprocess.CalledProcessError:
        print("❌ Failed to check Node.js version")
        return False

def check_pnpm_installed():
    """Check if pnpm is installed, install it if not."""
    if not check_command_exists("pnpm"):
        print("⚠️  pnpm is not installed. Installing pnpm...")
        try:
            # Try to install pnpm using npm
            if check_command_exists("npm"):
                subprocess.run(
                    ["npm", "install", "-g", "pnpm"],
                    check=True
                )
                print("✅ pnpm installed successfully")
            else:
                print("❌ npm is not available. Please install pnpm manually:")
                print("   npm install -g pnpm")
                return False
        except subprocess.CalledProcessError:
            print("❌ Failed to install pnpm")
            return False
    
    try:
        result = subprocess.run(
            ["pnpm", "--version"],
            capture_output=True,
            text=True,
            check=True
        )
        print(f"✅ pnpm version: {result.stdout.strip()}")
        return True
    except subprocess.CalledProcessError:
        print("❌ Failed to check pnpm version")
        return False

def install_dependencies():
    """Install project dependencies using pnpm."""
    if NODE_MODULES_DIR.exists() and PNPM_LOCK_FILE.exists():
        print("📦 Dependencies already installed. Skipping installation...")
        return True
    
    print("📦 Installing dependencies...")
    try:
        subprocess.run(
            ["pnpm", "install"],
            cwd=PROJECT_DIR,
            check=True
        )
        print("✅ Dependencies installed successfully")
        return True
    except subprocess.CalledProcessError:
        print("❌ Failed to install dependencies")
        return False

def run_dev_server():
    """Run the development server."""
    print("\n🚀 Starting development server...")
    print("=" * 50)
    
    # Create a temporary file for localStorage if it doesn't exist
    import tempfile
    import os
    temp_dir = tempfile.gettempdir()
    localstorage_file = os.path.join(temp_dir, "vue-devtools-localstorage.json")
    
    # Set NODE_OPTIONS to include --localstorage-file flag
    env = os.environ.copy()
    node_options = env.get("NODE_OPTIONS", "")
    if "--localstorage-file" not in node_options:
        if node_options:
            env["NODE_OPTIONS"] = f"{node_options} --localstorage-file={localstorage_file}"
        else:
            env["NODE_OPTIONS"] = f"--localstorage-file={localstorage_file}"
    
    try:
        # Run pnpm dev with the modified environment
        subprocess.run(
            ["pnpm", "dev"],
            cwd=PROJECT_DIR,
            env=env,
            check=False  # Don't raise on exit, let user stop with Ctrl+C
        )
    except KeyboardInterrupt:
        print("\n\n👋 Development server stopped by user")
        sys.exit(0)
    except Exception as e:
        print(f"\n❌ Error running development server: {e}")
        sys.exit(1)

def main():
    """Main function to orchestrate the setup and server start."""
    print("=" * 50)
    print("Frontend Development Server Launcher")
    print("=" * 50)
    print()
    
    # Check prerequisites
    if not check_node_installed():
        sys.exit(1)
    
    if not check_pnpm_installed():
        sys.exit(1)
    
    # Install dependencies if needed
    if not install_dependencies():
        sys.exit(1)
    
    # Run the dev server
    run_dev_server()

if __name__ == "__main__":
    main()
