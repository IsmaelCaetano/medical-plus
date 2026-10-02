import os
import base64

os.makedirs("public/brand", exist_ok=True)

with open("public/brand/medicalplus-logo-horizontal.png", "rb") as f:
    logo_b64 = base64.b64encode(f.read()).decode("utf-8")

with open("public/brand/medicalplus-symbol.png", "rb") as f:
    sym_b64 = base64.b64encode(f.read()).decode("utf-8")

svg_logo = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1875 610" width="100%" height="100%">
  <image href="data:image/png;base64,{logo_b64}" width="1875" height="610" />
</svg>'''

with open("public/brand/medicalplus-logo-horizontal.svg", "w", encoding="utf-8") as f:
    f.write(svg_logo)

svg_sym = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 570" width="100%" height="100%">
  <image href="data:image/png;base64,{sym_b64}" width="480" height="570" />
</svg>'''

with open("public/brand/medicalplus-symbol.svg", "w", encoding="utf-8") as f:
    f.write(svg_sym)

# Vector favicon SVG
svg_fav = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none">
  <rect width="64" height="64" rx="14" fill="#EEF4DF"/>
  <path d="M32 12C23 12 16 19 16 28C16 36 24 43 31 51C31.5 51.6 32.5 51.6 33 51C40 43 48 36 48 28C48 19 41 12 32 12Z" fill="#83AB49"/>
  <path d="M22 28C22 21 26 16 32 16C32 26 25 33 22 28Z" fill="#C9D997"/>
  <path d="M32 20V34M25 27H39" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>'''

with open("public/brand/favicon.svg", "w", encoding="utf-8") as f:
    f.write(svg_fav)

# Also copy favicon.svg to public/favicon.svg
with open("public/favicon.svg", "w", encoding="utf-8") as f:
    f.write(svg_fav)

print("SVG assets created successfully!")
