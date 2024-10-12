<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" encoding="UTF-8"/>
<xsl:key name="keyactor" match="actor" use="concat(first_name,' ',last_name)"/>
<xsl:template match="movies">
<html>
<head>
<title>Cinoche</title>
<link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
<h3>Question 1: tous les éléments titre grâce à un gabarit</h3>
<xsl:apply-templates select="movie"/>
<hr/>
<h3>Question 2: titre des films sortis après 2000</h3>
<xsl:apply-templates select="movie[year>2000]"/>
<hr/>
<h3>Résumé de American Beauty</h3>
<xsl:apply-templates select="movie[title='American Beauty']/summary"/>

<h3>Metteur en scène de Gladiator</h3>
<xsl:apply-templates select="movie[title='Gladiator']/director"/>
<hr/>

<h3>Titre des films de Harrison Ford</h3>
<xsl:apply-templates select="movie[actor[last_name='Ford']]"/>
<hr/>

<h3>Films avec Résumé</h3>
<movie>
<xsl:for-each select="movie[summary]">
<xsl:value-of select="title"/>
<xsl:if test="position() != last()">
<xsl:text>, </xsl:text>
</xsl:if>
</xsl:for-each>
</movie>
<hr/>

<h3>Films sans Résumé</h3>
<movie>
<xsl:for-each select="movie[not(summary)]">
<xsl:value-of select="title"/>
<xsl:if test="position() != last()">
<xsl:text>, </xsl:text>
</xsl:if>
</xsl:for-each>
</movie>
<hr/>

<h3>Role de Clint Eastwood dans Impitoyable</h3>
<xsl:apply-templates select="movie[title='Impitoyable']/actor[last_name='Eastwood']/role"/>
<hr></hr>

<h3>Dernier film de la liste</h3>
<xsl:apply-templates select="movie[last()]/title"/>
<hr></hr>

<h3>Films dont titre contient G</h3>
<movie>
<xsl:for-each select="movie[contains(title,'G')]">
<xsl:value-of select="title"/>
<xsl:if test="position() != last()">
<xsl:text>, </xsl:text>
</xsl:if>
</xsl:for-each>
</movie>
<hr></hr>

<h3>Liste films 3 acteurs</h3>
<movie>
<xsl:for-each select="movie[count(actor) = 3]">
<xsl:value-of select="title"/>
<xsl:if test="position() != last()">
<xsl:text>, </xsl:text>
</xsl:if>
</xsl:for-each>
</movie>
<hr></hr>

<h3>Liste acteurs sans doublons</h3>
<actors>
    <xsl:for-each select="//actor[generate-id() = generate-id(key('keyactor', concat(first_name,' ',last_name))[1])]">
        <xsl:sort select="concat(first_name,' ',last_name)" order="ascending"/>
        <actor>
            <first_name><xsl:value-of select="first_name"/></first_name>
            <last_name><xsl:value-of select="last_name"/></last_name>
        </actor>
    </xsl:for-each>
</actors>

</body>
</html>
<!-- question 1 avec gabarit-->
</xsl:template>
<xsl:template match="movie">
<xsl:value-of select="title/text()"/><br/>
</xsl:template>





</xsl:stylesheet>