package co.com.sofka.questions.usecases;


import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;

import reactor.core.publisher.Mono;

@SpringBootTest
class AddAnswerUseCaseTest {

    @SpyBean
    AddAnswerUseCase addAnswerUseCase;

    @MockBean
    GetUseCase getUseCase;

    @MockBean
    AnswerRepository answerRepository;

    @Test
    void answerTest(){
        var questionDTO = new QuestionDTO("00011","u0001","Que lenguaje te gusta?","Programacion","pruebashollman@gmail");
        var answerDTO = new AnswerDTO("1111","u0001","00011","Java");
        var answer = new Answer();
        answer.setId("1111");
        answer.setQuestionId("u0001");
        answer.setUserId("00011");
        answer.setAnswer("Java");
        Mockito.when(answerRepository.save(Mockito.any(Answer.class))).thenReturn(Mono.just(answer));
        Mockito.when(getUseCase.apply(Mockito.anyString())).thenReturn(Mono.just(questionDTO));
        var reusultDTO = addAnswerUseCase.apply(answerDTO);
        var resultQuestionDTO = reusultDTO.block();
        assert resultQuestionDTO != null;
        Assertions.assertEquals(resultQuestionDTO.getId(),questionDTO.getId());
        Assertions.assertEquals(resultQuestionDTO.getQuestion(),questionDTO.getQuestion());
        Assertions.assertEquals(resultQuestionDTO.getAnswers().get(0).getQuestionId(),answerDTO.getQuestionId());

    }

}
