#include <iostream>

class Point
{
public:
    int x;
    int y;

    Point(int i, int j)
    {
        x = i;
        y = j;
    }
};

int main()
{
    Point *obj1 = new Point(7, 5);
    std::cout << "(" << obj1->x << "," << obj1->y << ")" << std::endl;
    obj->z = 10;
    return 0;
}