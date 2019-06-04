import test as rev
import unittest

class PrintArrayTest(unittest.TestCase):
    rev.actionItem()

    def test1(self):
        self.assertEqual(rev.getSum([1,2,3,4,5]), 15)
    def test2(self):
        self.assertEqual(rev.getSum([1,2,3,4,5,6,7,8,9,10]), 55)
    def test3(self):
        self.assertEqual(rev.getSum([1,2,3,4,5,6,7,8,9]), 45)
    def test4(self):
        self.assertEqual(rev.getSum([1,2,3,4,6,7,8,9,10]), 50)
    def test5(self):
        self.assertEqual(rev.getSum([1,2,3,4,5,6,7,8,10]), 46)

     # any task you want run before any method above is executed, put them in the setUp method
    def setUp(self):
        # add the setUp tasks
        print("running setUp")
    # any task you want run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        # add the tearDown tasks
        print("running tearDown tasks")


if __name__ == '__main__':
    unittest.main()

