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

## Install Doom emacs 

For detailed installation instructions, follow the guide available in the [Doom Emacs repository](https://github.com/doomemacs/doomemacs).
