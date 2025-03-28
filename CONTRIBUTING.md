[asdf-vm]: https://asdf-vm.com/

# 🚀 Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

## 📥 Prerequisites

The following software is required to be installed on your system:

- [Node.js 20.11.1+](https://nodejs.org/en/download/)
- [Bun 1.1.30+](https://bun.sh/)

We recommend using [asdf version manager][asdf-vm] to install and manage all
the programming languages' requirements.

## 🔧 Setup

Cloning the repository:

```
git clone git@github.com:cesium/hydrogen.git
cd hydrogen
git checkout develop
```

Installing prerequisites:

```
asdf install
```

Installing dependencies:

```
bun i
```

Finally, follow the exemplary `.env.local.sample` file to create your own `.env.local`.

## 🔨 Development

Starting the development server.

```
bun dev
```

Lint your code.

```
bun lint
```

Format your code.

```
bun format
```

## 🔗 References

You can use these resources to learn more about the technologies this project uses.

- [Getting Started with React](https://reactjs.org/docs/getting-started.html)
- [Learn Next.js](https://nextjs.org/learn)
