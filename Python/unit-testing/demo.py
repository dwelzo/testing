#!/usr/bin/env python3
"""
Simple demo script showing the calculator add function.
"""

from app.calculator import add

def main():
    """Demonstrate the add function."""
    print("=== Simple Calculator Demo ===\n")
    
    print("Addition Examples:")
    print(f"2 + 3 = {add(2, 3)}")
    print(f"10 + 5 = {add(10, 5)}")
    print(f"0 + 7 = {add(0, 7)}")
    print(f"-2 + 8 = {add(-2, 8)}")

if __name__ == "__main__":
    main()