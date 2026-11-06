[mise]: https://mise.jdx.dev/

# 🚀 Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

## 📥 Prerequisites

The following software is required to be installed on your system:

- [Node.js 20.11.1+](https://nodejs.org/en/download/)
- [Bun 1.4+](https://bun.sh/)

We recommend using [mise][mise] to install and manage all the programming
languages' requirements. The required versions are listed in the
`.tool-versions` file, which mise reads.

## 🔧 Setup

First, clone the repository:

```
git clone git@github.com:cesium/hydrogen.git
cd hydrogen
git checkout develop
```

Then, if you are using mise, install the required tools:

```
mise install
```

Next, install the dependencies:

```
bun i
```

Finally, create your environment file and change it as needed:

```
cp .env.local.sample .env.local
```

| Variable                      | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| `SHOPKIT_API_KEY`             | API key used to fetch the store's products     |
| `UMAMI_URL`                   | URL of the Umami analytics instance            |
| `UMAMI_WEBSITE_ID`            | Website ID in Umami                            |
| `NEXT_PUBLIC_CURRENT_MANDATE` | Current team mandate (e.g. `2026-2027`)        |
| `NEXT_PUBLIC_ATLAS_API_URL`   | URL of the Atlas API, used to fetch the events |

## 🔨 Development

Start the development server and then you can open `http://localhost:3000`.

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

You can use these resources to learn more about the technologies this project
uses.

- [Learn React](https://react.dev/learn)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)
