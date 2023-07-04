{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-22.11";
    flake-utils.url = "github:numtide/flake-utils";
    flake-compat = {
      url = "github:edolstra/flake-compat";
      flake = false;
    };
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs { inherit system; };
          nodejs = pkgs.nodejs-16_x;
          yarn = pkgs.yarn.override { inherit nodejs; };
        in
        {
          # nix develop
          devShell = pkgs.mkShell {
            buildInputs = with pkgs; [
              rnix-lsp
              nixpkgs-fmt
              nodejs
              yarn
            ];
            shellHook = ''
              export NODE_ENV="development"
              export NODE_OPTIONS="--openssl-legacy-provider"
              export PATH="$PWD/node_modules/.bin/:$PATH"
            '';
          };
        }
      );
}
