# Guide to Using Emacs with JavaScript on NixOS

This guide will help you set up Emacs on NixOS and get started with JavaScript development.

## Install NixOS Distribution

1. Download the NixOS ISO from [NixOS Downloads](https://nixos.org/download/).
2. During the installation, I recommend to choose the KDE Plasma desktop environment.

## Installing Packages

1. Search for the desired packages at [NixOS Packages](https://search.nixos.org/packages).
2. Navigate to `/etc/nixos`.
3. Open `configuration.nix` in a text editor.
4. Add the packages you want to install under `environment.systemPackages`:

   ```nix
   environment.systemPackages = with pkgs; [
    # Example: to install Brave browser
    brave
   ];
   ```

6. Rebuild NixOS

   ```sh
   sudo nixos-rebuild switch
   ```

## Doom emacs 

For detailed installation instructions, follow the guide available in the [Doom Emacs repository](https://github.com/doomemacs/doomemacs).

### Install Doom emacs

I installed the next packages:

   ```nix
   environment.systemPackages = with pkgs; [
    # other packages
    # Install emacs and dependencies
    emacs
    git
    ripgrep
    fd
    multimarkdown
    shellcheck
   ];
   ```

Don't forget to rebuild NixOS.

Run in your terminal:
   ```sh
   git clone --depth 1 https://github.com/doomemacs/doomemacs ~/.config/emacs
   ~/.config/emacs/bin/doom install
   ```

### "Add ~/.config/emacs/bin to your PATH"

To ensure you can use the Doom Emacs commands, you need to add `~/.config/emacs/bin` to your PATH. 

1. Create a file called `.bashrc` in your home directory (if it doesn't already exist).
2. Add the following line to `.bashrc`:

   ```sh
   export PATH="$HOME/.config/emacs/bin:$PATH"
   ```
