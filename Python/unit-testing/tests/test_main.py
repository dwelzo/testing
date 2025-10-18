"""
Simple test case for the calculator module.
"""

from app.calculator import add


def test_add_two_numbers():
    """Test that adding two numbers works correctly."""
    result = add(2, 3)
    assert result == 5