package co.com.sofka.questions.usecases;


import reactor.core.publisher.Mono;

@FunctionalInterface
public interface EnviarEmail {
    public Mono<String> enviarEMail(String to, String subject, String body);


}
