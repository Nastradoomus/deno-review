FROM denoland/deno:latest

# The port that your application listens to.
EXPOSE 1337

WORKDIR /

# Prefer not to run as root.
USER deno

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
# Ideally cache deps.ts will download and compile _all_ external files used in main.ts.
#COPY deps.ts .
#RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache --unstable ./server/app.ts

CMD ["run", "--allow-net", "--allow-read", "--allow-write", "--allow-run", "--allow-env", "--unstable", "./server/app.ts"]