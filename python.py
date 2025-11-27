def saisie_nombre(message):
    try :
        N = int(input(message)) 
        return N
    except ValueError :
        print("Erreur : Veuillez entrer un nombre entier valide.")
        return saisie_nombre(message)

def saisie_operateur(message):
    operateurs_valides = ['+', '-', '*', '/']
    operateur = input(message)
    if operateur in operateurs_valides:
        return operateur
    else:
        print("Erreur : Veuillez entrer un opérateur valide (+, -, *, /).")
        return saisie_operateur(message)
    

N1 = saisie_nombre("Entrez le premier nombre : ")
operateur = saisie_operateur("Entrez l'opérateur (+, -, *, /) : ")
N2 = saisie_nombre("Entrez le deuxième nombre : ")
equal = input ("entrez '='pour afficher le résulat de l'opération")
if equal == '=' :
    print (f "{N1} {operateur} {N2} = ", end="")
    if operateur == '+':
        print(N1 + N2)
    elif operateur == '-':
        print(N1 - N2)
    elif operateur == '*':
        print(N1 * N2)
    elif operateur == '/':
        if N2 != 0:
            print(N1 / N2)
        else:
            print("Erreur : Division par zéro.")

