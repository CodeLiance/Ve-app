# Ve! — app móvil

App nativa de Ve! (iOS y Android) para estudiantes universitarios, hecha con Expo y React Native.

El backend y la landing viven en sus propios repos:

- Backend (NestJS + Prisma + PostgreSQL): [CodeLiance/Ve-back](https://github.com/CodeLiance/Ve-back)
- Landing (Next.js): [CodeLiance/Ve-landing](https://github.com/CodeLiance/Ve-landing)

## Stack

- Expo SDK 57, React Native 0.86, React 19, TypeScript
- Expo Router (rutas por archivos en `src/app/`)
- NativeWind (Tailwind) para estilos
- Reanimated, Gesture Handler y Bottom Sheet
- Axios + Zod para la API, i18next para idiomas
- EAS para builds y envío a las tiendas

## Estructura

```
src/
  app/          Pantallas y rutas (Expo Router): (auth), (tabs), chat, user, admin…
  components/   Componentes por área (feed, chat, explore, profile, ui, shared…)
  context/      Estado global (auth, chat, tema, notificaciones…)
  hooks/        Hooks reutilizables
  lib/          Cliente de la API, configuración y utilidades
  constants/    Tema, colores, fuentes, textos legales
  i18n/         Traducciones
  types/        Tipos compartidos
assets/         Íconos, splash e imágenes
docs/           Guía de publicación en App Store y Google Play
```

## Empezar

```bash
npm install
cp .env.example .env    # pon en EXPO_PUBLIC_API_URL la URL del backend
npx expo start
```

En un iPhone o Android físico, `localhost` no apunta a tu computador: usa la IP de tu red local
(por ejemplo `http://192.168.1.71:3002/api`). Más detalles en `.env.example`.

Para correr el backend y Metro a la vez, `./START.sh` espera el repo del backend clonado en `./USCback`
(esa carpeta está ignorada por git).

## Builds nativos

```bash
npx expo run:ios                 # simulador o iPhone conectado (--device)
npx expo run:android
npx eas-cli build --profile production --platform all
```

La guía completa para publicar está en [docs/PUBLICACION-TIENDAS.md](docs/PUBLICACION-TIENDAS.md).
