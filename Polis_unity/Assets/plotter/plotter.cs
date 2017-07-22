using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

public class plotter : MonoBehaviour {

	public Comments[] conversation;

	// Use this for initialization
	void Start () {



		Debug.Log("Start");

		StartCoroutine(GetText(callBack => {
	        // callBack is going to be null until it’s set
	        if(callBack != null) {
	            // Draw
				drawSpheres();
	        }
    	}));


		
	}
	
	// Update is called once per frame
	void Update () {
		
	}


	void drawSpheres ()
	{

		Debug.Log (conversation.Length);
		for (int i = 0; i < conversation.Length; i++) {


			//sphere
			GameObject sphere = GameObject.CreatePrimitive (PrimitiveType.Sphere);
			sphere.transform.position = new Vector3 (Random.Range (0, 25), Random.Range (0, 25), Random.Range (0, 25));
			sphere.transform.localScale = new Vector3 (1, 1, 1);

			//text
			GameObject obj = new GameObject();
			TextMesh tMesh = obj.AddComponent<TextMesh> ();
			tMesh.text = conversation[i].txt;
			tMesh.color = Color.black;
			obj.transform.position = sphere.transform.position;
			obj.transform.localScale = new Vector3 (0.1f, 0.1f, 0.1f);
			tMesh.fontSize = 100;

			//render
			MeshRenderer sphereRenderer = sphere.GetComponent<MeshRenderer> ();
			Color randomColor = new Color (Random.Range (0f, 0.5f), Random.Range (0.4f, 1f), Random.Range (0.8f, 1f), 1);
			sphereRenderer.material.color = randomColor;


		}

		    

	}

	IEnumerator GetText(System.Action<int> callBack) 
    {
		using (UnityWebRequest www = UnityWebRequest.Get("https://polis-api-proxy.herokuapp.com/api/v3/conversations/9jdhtfpcd5/comments?include_social=false&gid=3"))
        {
			www.SetRequestHeader("accept", "application/json");

			www.SetRequestHeader("Authorization", "pkey_XXXXXXXXXX");
        	
            yield return www.Send();

            if (www.isNetworkError || www.isHttpError)
            {
                Debug.Log(www.error);
				callBack(-1);
            }
            else
            {
                // Show results as text
                Debug.Log(www.downloadHandler.text);

                // Or retrieve results as binary data
                //byte[] results = www.downloadHandler.data;
				string jsonString = www.downloadHandler.text;

				conversation = JsonHelper.getJsonArray<Comments> (jsonString);

				Debug.Log(conversation.Length);
				callBack(0);

            }
        }
    }
}

