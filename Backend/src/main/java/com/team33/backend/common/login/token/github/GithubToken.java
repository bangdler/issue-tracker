package com.team33.backend.common.login.token.github;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.team33.backend.common.login.token.WebToken;
import lombok.Getter;

@Getter
public class GithubToken implements WebToken {

    public static final String GITHUB = "github";
    private static final String TOKEN_DELIMETER = " ";

    @JsonProperty("access_token")
    private String accessToken;

    @JsonProperty("token_type")
    private String tokenType;

    @JsonProperty("scope")
    private String scope;

    public String getAccessToken() {
        return tokenType + TOKEN_DELIMETER + accessToken;
    }

    @Override
    public String toString() {
        return "GithubToken{" +
                "accessToken='" + accessToken + '\'' +
                ", tokenType='" + tokenType + '\'' +
                '}';
    }
}
