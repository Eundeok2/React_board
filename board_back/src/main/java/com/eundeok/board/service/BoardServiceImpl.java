package com.eundeok.board.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.eundeok.board.dto.BoardDto;
import com.eundeok.board.mapper.BoardRepository;

@Service
public class BoardServiceImpl implements BoardService{
	
	private final BoardRepository boardRepository;

	public BoardServiceImpl(BoardRepository boardRepository) {
		super();
		this.boardRepository = boardRepository;
	}

	@Override
	public List<BoardDto> getArticles() {
		List<BoardDto> list = null;
		try {
			list = boardRepository.findAll();
		} catch (Exception e) {
			System.out.println(e);
		}
		return list;
	}

	@Override
	public BoardDto getArticle(int postId) {
		boardRepository.updateHit(postId);
		BoardDto boardDto = boardRepository.findById(postId);
		return boardDto;
	}

	@Override
	public void deleteArticle(int postId) {
		boardRepository.deleteById(postId);		
	}

	@Override
	public void updateArticle(BoardDto boarddto) {
		boardRepository.updateArticle(boarddto);
	}

	@Override
	public void insertArticle(BoardDto boardDto) {
		boardRepository.createArticle(boardDto);
	}
	
}
