FROM alpine:3.20.1
WORKDIR /app
RUN apk add --no-cache curl
COPY trafic_gen.sh trafic_gen.sh
RUN chmod +x trafic_gen.sh
ENTRYPOINT ["./trafic_gen.sh"]