import pandas as pd
import random

# Load dataset
df = pd.read_csv("music_dataset.csv")

def get_recommendations(genre=None, mood=None):
    filtered_df = df

    if genre:
        filtered_df = filtered_df[filtered_df["Genre"].str.lower() == genre.lower()]
    if mood:
        filtered_df = filtered_df[filtered_df["Mood"].str.lower() == mood.lower()]

    # Get 5 random recommendations
    recommendations = filtered_df.sample(n=min(5, len(filtered_df))).to_dict(orient="records")
    
    return recommendations
