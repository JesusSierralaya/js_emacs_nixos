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
### Link your github account with emacs

1. Install xclip package
2. Generate an SSH key for your GitHub account
   ```sh
   ssh-keygen -t rsa -b 4096 -C "jesus.sierralaya@hotmail.com"
   ```
3. Save the key in the default location (Press Enter)
4. Create a passphrase (Remember this passphrase as you will need it for every pull or push)
5. Start the ssh agent
   ```sh
   eval "$(ssh-agent -s)"
   ```
6. Add the private SSH key to the SSH agent and enter your passphrase
   ```sh
   ssh-add
   ```
7. Configure your GitHub user data
   ```sh
   git config --global user.name "Jesus Sierralaya"
   git config --global user.email "jesus.sierralaya@hotmail.com"
   ```
8. Copy the SSH key to the clipboard (if saved in the default location)
   ```sh
   xclip -selection clipboard < ~/.ssh/id_rsa.pub
   ```
9. Add the SSH key to your GitHub account
   - Go to [GitHub SSH settings](https://github.com/settings/keys)
   - Click on "New SSH key"
   - Add a title (e.g., "nixos laptop") and paste the key in the key field
   - Click "Add SSH key"

### Clone the repository to local with doom emacs
1. Create a directory for the projects (e.g., "projects")
2. Go there with Doom emacs `SPC f d`
3. Copy the shh url in Github
![image](https://github.com/JesusSierralaya/js_emacs_nixos/assets/86715028/9b8a4dea-d130-48fd-91e5-0fbab57320ad)
4. Clone the repo `SPC g C`, `u`
![image](https://github.com/JesusSierralaya/js_emacs_nixos/assets/86715028/d81517d4-3dcf-4534-8f67-73e4b54a25e9)

### Make a change and send to the github repository
1. Create a commit `SPC g g`, `s`
