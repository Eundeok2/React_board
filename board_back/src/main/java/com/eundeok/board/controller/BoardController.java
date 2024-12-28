package com.eundeok.board.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eundeok.board.dto.BoardDto;
import com.eundeok.board.service.BoardService;


@RestController
@RequestMapping("/react-board")
public class BoardController {
	
	private final BoardService boardService;

	public BoardController(BoardService boardService) {
		super();
		this.boardService = boardService;
	}
	
	//전체 게시글 조회
	@GetMapping("/articles")
	public ResponseEntity<List<BoardDto>> getArticles() {
		System.out.println("===============================Control 문제없음===============================");
		List<BoardDto> list = boardService.getArticles();
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	// 특정 게시글 조회
    @GetMapping("/{postId}")
    public ResponseEntity<BoardDto> getPostById(@PathVariable int postId) {
    	BoardDto post = boardService.getArticle(postId);
        if (post == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);  // 404 Not Found
        }
        return new ResponseEntity<>(post, HttpStatus.OK);  // 200 OK 응답과 함께 게시글 반환
    }
	
    // 게시글 생성
    @PostMapping
    public ResponseEntity<BoardDto> createPost(@RequestBody BoardDto BoardDto) {
        boardService.insertArticle(BoardDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    // 게시글 수정
    @PutMapping("/{postId}")
    public ResponseEntity<BoardDto> updatePost(@PathVariable Integer postId, @RequestBody BoardDto BoardDto) {
        BoardDto.setPostId(postId);  // postId 설정
        boardService.updateArticle(BoardDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 게시글 삭제
    @DeleteMapping("/{postId}")
    public ResponseEntity<Void> deletePost(@PathVariable Integer postId) {
    	boardService.deleteArticle(postId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);  // 204 No Content 응답
    }
}
