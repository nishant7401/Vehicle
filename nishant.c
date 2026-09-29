
#include <stdio.h>

void reverseTowerOfHanoi(int n, char source, char destination, char auxiliary) {
    if (n == 1) {
        printf("Move disk 1 from %c to %c\n", source, destination);
        return;
    }

    reverseTowerOfHanoi(n - 1, destination, auxiliary, source);
    printf("Move disk %d from %c to %c\n", n, destination, source);
    reverseTowerOfHanoi(n - 1, auxiliary, source, destination);
}

int main() {
    int n;

    printf("Enter number of disks: ");
    scanf("%d", &n);

    printf("Reversing the sequence of moves:\n");
    reverseTowerOfHanoi(n, 'C', 'A', 'B');  // Moving back to source

    return 0;
}