package com.gameduck.snowmanbackend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.gameduck.snowmanbackend.config.repository.UserRepository;
import com.gameduck.snowmanbackend.domain.Snowman;
import com.gameduck.snowmanbackend.domain.User;
import com.gameduck.snowmanbackend.dto.SnowmanAllUserResponseDto;
import com.gameduck.snowmanbackend.dto.SnowmanSaveRequestDto;
import com.gameduck.snowmanbackend.repository.SnowmanRepository;

import lombok.RequiredArgsConstructor;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class SnowmanService {

	private final SnowmanRepository snowmanRepository;
	private final UserRepository userRepository;

	//생성
	@Transactional
	public Snowman saveSnowman(SnowmanSaveRequestDto requestDto) {

		User user = userRepository.findByEmail(requestDto.getTargetEmail()).get();
		requestDto.setUser(user);

		return snowmanRepository.save(requestDto.toEntity());
	}

	//조회
	public List<SnowmanAllUserResponseDto> findUserAllSnowmans(String email) {

		return snowmanRepository.findAllByUserEmail(email)
			.stream()
			.map(SnowmanAllUserResponseDto::new)
			.collect(Collectors.toList());
	}

}
