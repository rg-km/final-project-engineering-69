package testing

import "testing"

type TestingSuite struct {
	testing.TB
	Suite
}

func (s *TestingSuite) BeforeTest() {
	s.TB.Log("BeforeTest")
}
