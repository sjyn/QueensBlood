#!/usr/bin/env python

import fitz
from PIL import Image
import os
import glob

pdf_order = [
    "security_officer",
    "riot_trooper",
    "grenadier",
    "j_unit_sweeper",
    "queen_bee",
    "toxirat",
    "levrikon",
    "grasslands_wolf",
    "mu",
    "mandragora",
    "elphadunk",
    "cactuar",
    "crystalline_crab",
    "quetzalcoatl",
    "zu",
    "devil_rider",
    "screamer",
    "flan",
    "crawler",
    "archdragon",
    "ogre",
    "deathwheel",
    "fleetwing",
    "zemzelett",
    "ignilisk",
    "capparwire",
    "mindflayer",
    "scrutineye",
    "hell_rider_ii",
    "flametrooper",
    "spearhawk",
    "sea_devil",
    "shoalopod",
    "crown_lance",
    "tonberry_king",
    "sandhog_pie",
    "bloatfloat",
    "bagnadrana",
    "cockatrice",
    "heatseeker",
    "bomb",
    "thug",
    "deathclaw",
    "landworm",
    "sandspitter",
    "chimera",
    "joker",
    "amphidex",
    "frightflower",
    "gagighandi",
    "insectoid_chimera",
    "gigantoad",
    "maloceros",
    "grandhorn",
    "great_malboro",
    "grangalan",
    "amalgam",
    "skeeskee",
    "griffon",
    "basilisk",
    "reapertail",
    "jabberwock",
    "desert_sahagin",
    "cavestalker",
    "stone_golem",
    "two_face",
    "gi_specter",
    "valron",
    "disgorgon",
    "dragon",
    "twin_brain",
    "black_bat",
    "bahba_velamyu",
    "rictus",
    "adjudicator",
    "yin_and_yang",
    "diabolic_variant",
    "special_forces_operator",
    "2_c_soldier_operator",
    "kelzmelzer",
    "panthera_protector",
    "hecteyes",
    "floating_death",
    "ironclad",
    "moss_grown_adamantoise",
    "mandragora_minion",
    "heatseeker_minion",
    "grangalan_junior",
    "baby_grangalan",
    "resurrected_amalgan",
    "cloud",
    "barret",
    "tifa",
    "aerith",
    "red_xiii",
    "yuffie",
    "cait_sith",
    "cid",
    "vincent",
    "ifrit",
    "shiva",
    "ramuh",
    "titan",
    "kujata",
    "odin",
    "phoenix",
    "leviathan",
    "alexander",
    "bahamut",
    "bahamut_arisen",
    "gilgamesh",
    "chocobo_and_moogle",
    "fat_chocobo",
    "posh_chocobo",
    "moogle_trio",
    "magic_pot",
    "materia_guardian",
    "midgardsormr",
    "mythril_golem",
    "terror_of_the_deep",
    "grasptropod",
    "custom_valkyrie",
    "gigatrice",
    "dyne",
    "anuran_suppresor",
    "specimen_h1024",
    "crimson_mare_mk_ii",
    "gi_nattak",
    "forgotten_specimen",
    "don_corneo_and_abzu",
    "red_dragon",
    "demon_gate",
    "reno",
    "rude",
    "elena",
    "tseng",
    "rufus_shinra",
    "roche",
    "j_squad",
    "chocobo_jockey",
    "space_ranger",
    "haunted_hotel",
    "skywheel",
    "loveless",
    "saucer_squad",
    "dio",
    "ultimate_party_animal",
    "sephiroth",
    "emerald_witch",
    "shadowblood_queen",
    "diamond_dust",
    "diamond_dust_02",
    "diamond_dust_03",
    "diamond_dust_04",
    "diamond_dust_05",
    "diamond_dust_06",
    "moogle",
    "tiny_bronco",
    "galian_beast",
    "moogle_mage",
    "moogle_bard",
    "cacneo",
    "don_donberry",
    "hype_johnnys_i",
    "hype_johnnys_ii",
    "hype_johnnys_iii",
    "elemental",
    "elemental_02",
    "elemental_03",
    "elemental_04",
    "elemental_05",
    "elemental_06",
]
pdf_order.reverse()

def extract_images_from_pdf(pdf_path, output_folder):
    # Open the PDF file
    pdf_document = fitz.open(pdf_path)

    # Ensure the output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    img_count = 0
    for page_num in range(0, len(pdf_document), 2):
        page = pdf_document.load_page(page_num)
        mat = fitz.Matrix(6, 6)
        pix = page.get_pixmap(matrix=mat)
        img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
        
        # Calculate dimensions of each image in the 3x3 grid
        img_width, img_height = img.size
        cell_width = img_width // 3
        cell_height = img_height // 3

        if len(pdf_order) == 0:
            continue

        for row in range(3):
            for col in range(3):
                img_count += 1
                if img_count % 2 == 0 and page_num < 40:
                    continue

                filename = pdf_order.pop()

                left_offset = 0
                right_offset = 0
                top_offset = 0
                bottom_offset = 0

                if col == 0:
                    left_offset = 100
                    right_offset = -18
                elif col == 1:
                    left_offset = 59
                    right_offset = -59
                elif col == 2:
                    left_offset = 18
                    right_offset = -100

                if row == 0:
                    top_offset = 180
                    bottom_offset = 5
                elif row == 1:
                    top_offset = 75
                    bottom_offset = -100
                elif row == 2:
                    top_offset = -20
                    bottom_offset = -195

                # Define the bounding box for each cell
                left = col * cell_width
                upper = row * cell_height
                right = left + cell_width
                lower = upper + cell_height

                # Crop the image to the bounding box
                cropped_img = img.crop((
                    left + left_offset,
                    upper + top_offset,
                    right + right_offset,
                    lower + bottom_offset,
                ))

                # Save the cropped image
                output_filename = os.path.join(output_folder, f"{filename}.png")
                cropped_img.save(output_filename, "PNG")

if __name__ == "__main__":
    pdf_path = "../src/asset/cards/queensblood_pdf.pdf"
    output_folder = "../src/asset/cards"

    for png in glob.glob(f"{output_folder}/*.png"):
        os.remove(png)

    extract_images_from_pdf(pdf_path, output_folder)

