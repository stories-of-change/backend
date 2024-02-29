import csv
import json

csv_file_path = 'dist.csv'
json_file_path = 'dist.json'

data = {}

with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        # Split tags by commas and remove leading/trailing whitespaces
        tags = [tag.strip() for tag in row['Tags (comma seperated) '].split(',')]
        
        district_data = {
            'name': row['District Name'].strip(),
            'description': row['District Description'].strip(),
            'tags': tags
        }
        
        data[row['District Name'].strip()] = district_data

# Save the data as JSON
with open(json_file_path, 'w', encoding='utf-8') as jsonfile:
    json.dump(data, jsonfile, indent=2)

print(f"Conversion from CSV to JSON completed. Data saved in {json_file_path}")
