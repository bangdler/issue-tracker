package com.team33.backend.issue.controller.dto;

import lombok.Getter;

@Getter
public class MilestoneCount {

    private long count;

    public MilestoneCount(long count) {
        this.count = count;
    }

    public MilestoneCount() {
    }
}
