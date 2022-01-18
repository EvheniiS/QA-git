"""def setUp(self):
    self.browser = webdriver.Firefox()
    self.addCleanup (self.browser.quit)
def testPageTitle(self):
    self.browser.get('http://www.google.com')
    self.assertIn('Google', self.browser.title)
"""
def additon():
    a = int(input("Enter a number. "))
    b = int(input("Please enter another nubmer. "))
    print(a + b)


additon()
