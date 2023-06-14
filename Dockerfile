FROM denoland/deno:latest as base

WORKDIR /app

COPY main.ts .
COPY deno.jsonc .
COPY deno.lock .
COPY .env .
COPY data_blob.json .

RUN deno cache main.ts

CMD [ "task", "start" ]
