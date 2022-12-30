from pizzaria.models import Bebida, Pizza

from django.test import TestCase

class BebidaTestCase(TestCase):

    def setUp(self) -> None:
        Bebida.objects.create(nome="Coca-Cola", volume=600.00, preco=6.00)

    def test_querie(self):
        pizza = Bebida.objects.filter(nome="Coca-Cola").values()
        self.assertEqual(pizza[0].get('nome'), "Coca-Cola")
        self.assertEqual(pizza[0].get('volume'), 600.00)
        self.assertEqual(pizza[0].get('preco'), 6.00)