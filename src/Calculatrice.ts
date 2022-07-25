class Calculatrice {

    /**
     * Retourne le résultat de l'addition de deux nombres
     * @param nombre1 
     * @param nombre2 
     * @returns somme des deux nombres
     */
    public static addition(nombre1: number, nombre2: number){
        return Number((nombre1 + nombre2).toFixed(1))
    }

    /**
     * Retourne le résultat de la multiplication de deux nombres
     * @param nombre1 
     * @param nombre2 
     * @returns le produit des deux nombres
     */
    public static multiplication(nombre1: number, nombre2: number) {
        return nombre1 * nombre2
    }

    /**
     * Retourne le résultat d'un quotient de deux nombre
     * @param numerateur
     * @param denominateur
     * @returns Le quotient du numerateur par le dénominateur
     */
    public static division(numerateur: number, denominateur: number) {
       
        if(numerateur === 0) {
            return 0;
        }

        return numerateur / denominateur;
    }

    public static soustraction(nombre1: number, nombre2: number){
        return nombre1 - nombre2
    }
}

export default Calculatrice;
