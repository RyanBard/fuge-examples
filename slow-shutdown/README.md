# Fuge Slow Shutdown
Usually, you want to shutdown gracefully (SIGTERM or SIGINT instead of SIGKILL).  For example, you probably want to send a SIGTERM to your microservices if they register and deregister themselves with a service discovery like consul.  You want to give those services a few seconds to gracefully unregister themselves before falling back to a SIGKILL (`kill -9`).  This example contains services that simulate a slow shutdown.

## Running the system

```sh
$ fuge shell fuge/fuge.yml
fuge> start all
fuge> stop all
```

The system will send the SIGTERM, then wait the configured 5 seconds before sending SIGKILL if the processes haven't stopped yet.
