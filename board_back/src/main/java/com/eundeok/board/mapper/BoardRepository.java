package com.eundeok.board.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.eundeok.board.dto.BoardDto;

@Mapper
public interface BoardRepository {
    List<BoardDto> findAll();

    BoardDto findById(int postId);
    void updateHit(int postId);

    void createArticle(BoardDto boardDto);

    void updateArticle(BoardDto boardDto);

    void deleteById(int postId);
}
