<script>
	var session = localStorage.getItem("id");
	if (session == null) {
	    $(location).attr('href','index.php');
	};
</script>