public long fibonacci(int i) {
    if (i ==0) return 0;
    if (i <=2) return 1;

    long fibterm = fibonacci(i-1) + fibonacci(i-2);
    return fibterm;
}

fibonacci(7);