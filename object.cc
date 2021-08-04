#include <iostream>

class Object
{
public:
    int x;

    Object(int i)
    {
        x = i;
    }
};

int main()
{
    Object *obj = new Object(1);
    std::cout << "Hello : " << obj->x << std::endl;
    return 0;
}