from django.test import TestCase

from pizzaria.models import Pizza, Sabores


class PizzaTestCase(TestCase):

    def setUp(self) -> None:
        self.sabor = Sabores.objects.create(nome="Mussarela")

    def test_create_pizza(self):
        pizza = Pizza.objects.create(
                                        nome="Pizza de  Mussarela", 
                                        imagem="imagem.jpg", 
                                        preco=49.99
                                    )
        pizza.sabores.set(self.sabor)
        querie = Pizza.objects.filter(nome="Pizza de  Mussarela").values()
        print(querie)
        self.assertEqual(querie[0].get('sabores'), "Mussarela")



