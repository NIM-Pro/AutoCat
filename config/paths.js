'use strict'

const Path = require('path').posix

const SrcDir = 'src'
const DestDir = 'product'

let Config = {
  transpile: {
    client: {
      js: [
        {
          src: Path.join(SrcDir, 'public', '**/*.js'),
          dest: Path.join(DestDir, 'public')
        },
        {
          src: Path.join(SrcDir, 'shared', '**/*.js'),
          dest: Path.join(DestDir, 'public', 'shared')
        }
      ],
      css: [
        {
          src: Path.join(SrcDir, 'public', '**/*.css'),
          dest: Path.join(DestDir, 'public')
        },
        {
          src: Path.join(SrcDir, 'shared', '**/*.css'),
          dest: Path.join(DestDir, 'public', 'shared')
        }
      ]
    },
    server: {
      js: [
        {
          src: Path.join(SrcDir, 'server', '**/*.js'),
          dest: Path.join(DestDir, 'server')
        },
        {
          src: Path.join(SrcDir, 'shared', '**/*.js'),
          dest: Path.join(DestDir, 'server', 'shared')
        },
        {
          src: Path.join(SrcDir, 'modules', '**/*.js'),
          dest: Path.join(DestDir, 'node_modules')
        }
      ]
    }
  },
  copy: [
    {
      src: Path.join(SrcDir, 'public', 'img', '**/*'),
      dest: Path.join(DestDir, 'public', 'img')
    },
    {
      src: Path.join(SrcDir, 'public', '**/*.html'),
      dest: Path.join(DestDir, 'public')
    }
  ]
}

module.exports = Config
