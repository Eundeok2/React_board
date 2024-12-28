package com.eundeok.board.service;

import java.util.List;

import com.eundeok.board.dto.BoardDto;

public interface BoardService {
	public List<BoardDto> getArticles();
	public BoardDto getArticle(int postId);
	public void insertArticle(BoardDto boardDto);
	public void updateArticle(BoardDto boardDto);
	public void deleteArticle(int postId);
}
