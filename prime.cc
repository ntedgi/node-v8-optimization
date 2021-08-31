#include <cmath>
#include <iostream>

bool isPrime(int n)
{
    if (n <= 1)
        return false;
    for (int i = 2; i <= sqrt(n); i++)
        if (n % i == 0)
            return false;
    return true;
}
int main()
{
    isPrime(11) ? std::cout << " true\n" : std::cout << " false\n";
    return 0;
}