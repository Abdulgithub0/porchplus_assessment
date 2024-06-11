import pandas as pd

# Load the .xlsx file
df = pd.read_excel('./dataset.xlsx')

# Save as .csv file
df.to_csv('dataset.csv', index=False)

