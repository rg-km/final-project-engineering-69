package testing

import "testing"

type TestingSuite struct {
	testing.TB
}

func (s *TestingSuite) BeforeTest() {
	s.TB.Log("BeforeTest")
}
