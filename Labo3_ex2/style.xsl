<?xml version="1.0" encoding="UTF-8"?>
    <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8"/>

        <xsl:template match="societes_stages">
            <html>
                <head> 
                    <link rel="stylesheet" type="text/css" href="style.css"></link> 
                </head>
                <body>
                    <xsl:apply-templates select="Etudiant"/>
                </body>
            </html>
        </xsl:template>

        <xsl:template match="Etudiant">
            <div>
                <h1>PROPOSITION DU LIEU DE STAGE</h1>
                <p><u>à compléter par le stagiaire en caractères majuscules et à remettre au titulaire concerné.</u></p>
                <table>
                    <tr>
                        <th>Nom et prénom de l'étudiant</th>
                        <td><xsl:value-of select="@nom_etudiant"/><xsl:text> </xsl:text><xsl:value-of select="@prenom_etudiant"/></td>
                    </tr>
                    <tr>
                        <th>Section</th>
                        <td><xsl:value-of select="section"/></td>
                    </tr>
                    <tr>
                        <th>Classe</th>
                        <td><xsl:value-of select="classe"/></td>
                    </tr>
                </table>
            </div>
            <xsl:apply-templates select="Societe"/>
            <xsl:apply-templates select="responsable_service"/>
            <xsl:apply-templates select="responsable_stagiaire"/>
        </xsl:template>
        <xsl:template match="Societe">
            <div>
                <p><u>RENSEIGNEMENTS CONCERNANT L’ENTREPRISE</u></p>
                <table>
                    <tr>
                        <th>Dénomination de l’entreprise</th>
                        <td><xsl:value-of select="nom_societe"/></td>
                    </tr>
                    <tr>
                        <th>Adresse de l'entreprise</th>
                        <td><xsl:value-of select="adresse"/></td>
                    </tr>
                    <tr>
                        <th>Objet social de l'entreprise</th>
                        <td><xsl:value-of select="objet_social"/></td>
                    </tr>
                </table>
            </div>
        </xsl:template>
        <xsl:template match="responsable_service">
            <div>
                <table>
                    <tr>
                        <th>Nom du directeur ou <br/> du responsable de service</th>
                        <td><xsl:value-of select="nom_serv"/></td>
                    </tr>
                </table>
            </div>
        </xsl:template>
        <xsl:template match="responsable_stagiaire">
            <div class="last_information">
                <table>
                    <tr>
                        <th>Nom et fonction du responsable <br/> du stagiaire</th>
                        <td><xsl:value-of select="nom_resp_stag"/></td>
                    </tr>
                    <tr>
                        <th>&#x2706;</th>
                        <td><xsl:value-of select="../Societe/telephone"/></td>
                    </tr>
                </table>
            </div>
        </xsl:template>
    </xsl:stylesheet>