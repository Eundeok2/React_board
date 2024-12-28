package com.eundeok.board.dto;

import java.time.LocalDateTime;

import lombok.Data;
@Data
public class BoardDto {
    private int postId;       // 게시글번호
    private String title;         // 제목
    private String content;       // 내용
    private String author;        // 작성자
    private int viewCount;    // 조회수
    private LocalDateTime createdAt; // 작성일자
    private LocalDateTime updatedAt; // 수정일자
}
