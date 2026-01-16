# Tango Yarns - Sitio Web

Sitio web para la distribución exclusiva de hilados artesanales 100% lana, hilados y teñidos a mano.

## Estructura del Proyecto

- `index.html` - Página principal con todas las secciones
- `styles.css` - Estilos con diseño artesanal y colores tierra/naturales
- `script.js` - Funcionalidad interactiva (filtros, lightbox, formularios)
- `images/` - Carpeta para las imágenes de los productos

## Características

- ✅ Diseño artesanal con colores cálidos (tierra, maderas, naturales)
- ✅ Galería de productos con filtros por línea
- ✅ Lightbox para ver imágenes en detalle
- ✅ Sección de distribuidores por país/región
- ✅ Formulario de contacto
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Navegación suave entre secciones

## Cómo Agregar Productos

Para agregar más productos al catálogo, copia el bloque siguiente en la sección `#catalog-grid` del HTML:

```html
<div class="yarn-item" data-line="NOMBRE_LINEA">
    <div class="yarn-image">
        <img src="images/ruta-de-tu-imagen.jpg" alt="Descripción del hilado" loading="lazy">
        <div class="yarn-overlay">
            <button class="yarn-zoom" data-image="images/ruta-de-tu-imagen.jpg">🔍 Ver Detalle</button>
        </div>
    </div>
    <div class="yarn-info">
        <span class="yarn-line">Nombre de la Línea</span>
        <span class="yarn-code">TY-XX-###</span>
    </div>
</div>
```

### Líneas disponibles (puedes agregar más):
- `clasica` - Línea Clásica
- `primavera` - Línea Primavera
- `otono` - Línea Otoño
- `naturaleza` - Línea Naturaleza

Para agregar una nueva línea, también debes agregar un botón de filtro en la sección `catalog-filters`.

## Imágenes

1. Coloca tus imágenes de productos en la carpeta `images/`
2. Actualiza las rutas en el HTML: `src="images/nombre-imagen.jpg"`
3. Las imágenes deben ser cuadradas (aspecto 1:1) para mejor visualización
4. Tamaño recomendado: 800x800px o 1000x1000px

## Personalización

### Colores
Los colores principales están definidos en `styles.css` en la sección `:root`. Puedes modificarlos según tus preferencias.

### Textos
Todos los textos están en `index.html`. Puedes modificar:
- Información de la empresa
- Descripción de productos
- Datos de distribuidores
- Información de contacto

## Para Ver el Sitio

1. Abre `index.html` en tu navegador
2. O usa un servidor local (recomendado para desarrollo)

## Notas

- El formulario de contacto actualmente muestra una alerta. Para producción, necesitarás conectarlo a un backend o servicio de email.
- Las imágenes de ejemplo usan placeholders. Reemplázalas con tus imágenes reales.
- Los datos de distribuidores son ejemplos. Actualízalos con información real.
